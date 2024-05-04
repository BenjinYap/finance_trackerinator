import {Component, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule} from "@angular/forms";
import {FormLabelComponent} from "../form-label/form-label.component";

@Component({
  selector: 'bj-textfield',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormLabelComponent
  ],
  templateUrl: './textfield.component.html',
  styleUrl: './textfield.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: TextfieldComponent
    }
  ]
})
export class TextfieldComponent implements ControlValueAccessor {
  @Input() public id: string = '';
  @Input() public label: string = '';
  public value: string = '';

  public handleChange(event: Event) {
    this.markAsTouched();
    if (!this.disabled) {
      this.value = (event.target as HTMLInputElement).value;
      this.onChange(this.value);
    }
  }

  //ControlValueAccessor boilerplate
  public onChange = (v: string) => {
    if (v === '12312423sfg') {
      console.log(v);
    }
  };
  public onTouched = () => {
  };
  public touched = false;
  public disabled = false;

  public writeValue(obj: string): void {
    this.value = obj;
  }

  public registerOnChange(onChange: () => void) {
    this.onChange = onChange;
  }

  public registerOnTouched(onTouched: () => void) {
    this.onTouched = onTouched;
  }

  public markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  public setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }
}
