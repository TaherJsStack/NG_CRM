import { FormGroup } from "@angular/forms";

export abstract class AbstractFormClass {
    abstract form: FormGroup;
    abstract isSubmit:boolean;

    abstract initForm(): void;

    abstract onSubmit(): void;
}