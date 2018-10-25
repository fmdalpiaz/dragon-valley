import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { DragonsService } from './../dragons.service';
import { Dragon } from '../dragon';

@Component({
    selector: 'app-manipulate-dragon',
    templateUrl: './manipulate-dragon.component.html',
    styleUrls: ['./manipulate-dragon.component.sass']
})
export class ManipulateDragonComponent implements OnInit {
    dragon: Dragon;
    dragonForm: FormGroup;
    isEditMode: boolean;
    isLoadingData: boolean;

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private service: DragonsService
    ) { }

    ngOnInit() {
        this.isLoadingData = true;
        this.dragon = new Dragon({});

        this.route.params.subscribe(params => {
            if (params['slug']) {
                const slug: string = params['slug'];

                this.isEditMode = true;

                if (!slug) {
                    console.error('Slug not found!');
                    return;
                }

                this.service
                    .get(slug)
                    .subscribe(
                        (data) => {
                            this.dragon = data;
                            this.createFormFields();
                        },
                        err => this.router.navigate(['dragons'])
                    );
            } else {
                this.isEditMode = false;
                this.createFormFields();
            }
        });
    }

    private createFormFields() {
        this.dragonForm = this.fb.group({
            'name': ['', [Validators.required, Validators.minLength(3)]],
            'type': ['', Validators.required],
            'histories': this.fb.array([])
        });

        if (this.isEditMode) {
            this.bindEditableValues();
        } else {
            this.isLoadingData = false;
        }
    }

    private bindEditableValues() {
        this.dragonForm.patchValue({
            'name': this.dragon.name,
            'type': this.dragon.type
        });

        if (this.dragon.histories.length) {
            for (let i = 0; i < this.dragon.histories.length; i++) {
                this.addHistory(this.dragon.histories[i]);
            }
        }

        this.isLoadingData = false;
    }

    get histories(): FormArray {
        return this.dragonForm.get('histories') as FormArray;
    }

    private createHistory(history: string): FormGroup {
        return this.fb.group({
            'history': [history, Validators.required]
        });
    }

    public addHistory(history?: string) {
        this.histories.push(this.createHistory(history || ''));
    }

    public removeHistory(i: number) {
        this.histories.removeAt(i);
    }

    private removeHistories() {
        for (let i = this.histories.length; i--; ) {
            this.removeHistory(i);
        }
    }

    public resetForm() {
        this.dragonForm.reset();
        this.removeHistories();

        if (this.isEditMode) {
            this.bindEditableValues();
        }
    }

    private updateDragon(formData: any) {
        this.service
            .put(this.dragon.slug, formData)
            .subscribe(
                data => {
                    this.router.navigate(['dragons', this.dragon.slug]);
                },
                err => console.error(err)
            );
    }

    private createDragon(formData: any) {
        this.service
            .post(formData)
            .subscribe(
                data => {
                    this.router.navigate(['dragons']);
                },
                err => console.error(err)
            );
    }

    private mapDragonProperties(): any {
        return {
            name: this.dragonForm.get('name').value,
            type: this.dragonForm.get('type').value,
            histories: this.histories.value.map(item => item.history)
        };
    }

    public submitForm() {
        if (this.isEditMode) {
            this.updateDragon(this.mapDragonProperties());
        } else {
            this.createDragon(this.mapDragonProperties());
        }
    }

}
