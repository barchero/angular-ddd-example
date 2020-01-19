import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from "@angular/core";
import {Commerce} from "@app/_model/02-entitieslayer/offers/commerce";
import {FormBuilder} from "@angular/forms";

@Component({
    selector: 'app-commerces-details-form-component',
    templateUrl: './commerces-details-form.component.html'
})
export class CommercesDetailsFormComponent implements OnInit{
    form = this.fb.group({
        name: [''],
        regNumber: ['']
    });
    
    @Input() commerce: Commerce;
    @Output() saveCommerce: EventEmitter<Commerce> = new EventEmitter<Commerce>();
    
    constructor(private fb: FormBuilder) {}
    
    ngOnInit(): void {
        
    }
    
    ngOnChanges(changes: SimpleChanges): void {
        if (changes.commerce.currentValue !== null) {
            this.commerce = JSON.parse(JSON.stringify(this.commerce));
    
            this.form.patchValue({
                name: this.commerce.name,
                regNumber: this.commerce.regNumber
            });
        }
    }
    
    _saveCommerce() {
        this.commerce.name = this.form.get('name').value;
        this.commerce.regNumber = this.form.get('regNumber').value;
    
        this.saveCommerce.emit(this.commerce);
    }

}

