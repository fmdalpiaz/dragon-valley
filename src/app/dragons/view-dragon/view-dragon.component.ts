import { Component, OnInit } from '@angular/core';
import { Dragon } from '../dragon';
import { Router, ActivatedRoute } from '@angular/router';
import { DragonsService } from '../dragons.service';

@Component({
    selector: 'app-view-dragon',
    templateUrl: './view-dragon.component.html',
    styles: []
})
export class ViewDragonComponent implements OnInit {
    dragon: Dragon;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private service: DragonsService
    ) { }

    ngOnInit() {
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
                        console.warn(this.dragon);
                    },
                    err => this.router.navigate(['dragons'])
                );

        });
    }

}
