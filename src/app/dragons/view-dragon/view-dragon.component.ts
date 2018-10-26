import { Component, OnInit } from '@angular/core';
import { Dragon } from '../dragon';
import { Router, ActivatedRoute } from '@angular/router';
import { DragonsService } from '../dragons.service';

@Component({
    selector: 'app-view-dragon',
    templateUrl: './view-dragon.component.html',
    styleUrls: ['./view-dragon.component.sass']
})
export class ViewDragonComponent implements OnInit {
    dragon: Dragon;
    isLoading: boolean;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private service: DragonsService
    ) { }

    ngOnInit() {
        this.isLoading = true;
        this.dragon = new Dragon({});

        this.route.params.subscribe(params => {
            const slug: string = params['slug'];

            if (!slug) {
                console.error('Slug not found!');
                return;
            }

            this.service
                .get(slug)
                .subscribe(
                    data => {
                        this.dragon = data;
                        this.isLoading = false;
                    },
                    err => this.router.navigate(['dragons'])
                );

        });
    }

    public removeDragon(slug: string) {
        this.service
            .delete(slug)
            .subscribe(
                data => this.router.navigate(['dragons']),
                err => console.log(err)
            );
    }

}
