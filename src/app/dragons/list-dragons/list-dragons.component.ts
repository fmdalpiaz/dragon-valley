import { Component, OnInit } from '@angular/core';

import { DragonsService } from './../dragons.service';
import { Dragon } from './../dragon';

@Component({
    selector: 'app-list-dragons',
    templateUrl: './list-dragons.component.html',
    styleUrls: ['./list-dragons.component.sass']
})
export class ListDragonsComponent implements OnInit {
    dragons: Dragon[];
    order: string;

    constructor(private service: DragonsService) { }

    ngOnInit() {
        this.dragons = [];
        this.order = 'name';

        this.service
            .getAll()
            .subscribe(
                data => this.dragons = this.filterSluggedDragons(data),
                err => console.error(err)
            );
    }

    private filterSluggedDragons(dragons: Dragon[]): Dragon[] {
        return dragons.filter(dragon => dragon.slug.trim() !== '' && dragon.type.trim() !== '');
    }

    public removeDragon(slug: string) {
        this.service
            .delete(slug)
            .subscribe(
                data => this.dragons = this.dragons.filter(item => item.slug !== slug),
                err => console.log(err)
            );
    }

}
