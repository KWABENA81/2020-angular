import { Component, OnInit } from "@angular/core";
import { Product } from "./product";
import { ProductService } from "./product.service";

@Component({
    selector: 'app-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

    pageTitle = 'Product List';
    imageWidth = 50;
    imageMargin = 2;
    showImage: boolean = false;

    _listFilter: string;
    filteredProducts: Product[];

    products: Product[] = [];
    errorMessage: any;
    
    constructor(private productService: ProductService) {
        // this.listFilter = 'cart';
    }
    
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    get listFilter(): string {
        return this._listFilter;
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.productService.getProducts().subscribe({
            next: products => {

                this.products = products;
                this.filteredProducts = this.products;
            },
            error: err => {
                this.errorMessage = err
            }
        });

    }

    performFilter(filterBy: string): Product[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: Product) => {
            return product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1;
        });
    }

    onRatingClicked(msg: string): void {
        this.pageTitle = 'Product List: ' + msg;
    }
}