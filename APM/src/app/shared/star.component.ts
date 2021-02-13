
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {

    @Input() rating = 0;
    starWidth = 0;

    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    // ngOnInit(): void {
    //     this.starWidth = this.rating * 75 / 5;
    // }

    onClick(): void {
        this.ratingClicked.emit(`The rating is ${this.rating}`);
    }

    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5;
    }
}
