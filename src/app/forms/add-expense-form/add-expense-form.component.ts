import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {TextfieldComponent} from "../../bjui/textfield/textfield.component";
import {ButtonComponent} from "../../bjui/button/button.component";
import {format} from "date-fns";

@Component({
  selector: 'app-add-expense-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TextfieldComponent,
    ButtonComponent,
    
  ],
  templateUrl: './add-expense-form.component.html',
  styleUrl: './add-expense-form.component.scss'
})
export class AddExpenseFormComponent {
  public form: FormGroup = this.formBuilder.group({
    date: [format(new Date(), 'yyyy-MM-dd HH:mm:ss')],
    category: ['Food'],
    item: ['awd'],
    amount: [12],
  });

  constructor(
    private formBuilder: FormBuilder,
  ) {

  }

  public handleSubmit() {
    console.log(this.form.value);
  }

  public bla() {
    this.form.patchValue({item: 'aaaaaaaaa'});
  }
}
