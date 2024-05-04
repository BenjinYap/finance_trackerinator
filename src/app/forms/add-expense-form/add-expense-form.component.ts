import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {TextfieldComponent} from "../../bjui/textfield/textfield.component";

@Component({
  selector: 'app-add-expense-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TextfieldComponent
  ],
  templateUrl: './add-expense-form.component.html',
  styleUrl: './add-expense-form.component.scss'
})
export class AddExpenseFormComponent {
  public form: FormGroup = this.formBuilder.group({
    item: ['awd'],
  });

  constructor(
    private formBuilder: FormBuilder,
  ) {

  }

  public bla() {
    this.form.patchValue({item: 'aaaaaaaaa'});
  }
}
