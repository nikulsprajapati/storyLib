import { HttpClientModule } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { ChartsModule } from "@progress/kendo-angular-charts";
import { DateInputsModule } from "@progress/kendo-angular-dateinputs";
import { EditorModule } from "@progress/kendo-angular-editor";
import { GridModule } from "@progress/kendo-angular-grid";
import { LayoutModule } from "@progress/kendo-angular-layout";
import { SchedulerModule } from "@progress/kendo-angular-scheduler";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { IntlModule } from '@progress/kendo-angular-intl';
import { FloatingLabelModule, LabelModule } from '@progress/kendo-angular-label';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { InputsModule, SwitchModule } from "@progress/kendo-angular-inputs";
import { UserListComponent } from "./user-list/user-list.component";

@NgModule({
    declarations: [
        
        UserProfileComponent,
        UserListComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        LayoutModule,
        LabelModule,
        InputsModule,
        FloatingLabelModule,
        DropDownsModule,
        ButtonsModule,
        GridModule,
        SwitchModule,
        SchedulerModule,
        EditorModule,
        ChartsModule,
        IntlModule,
        DateInputsModule,
    ],
    exports: [
        UserProfileComponent,
        UserListComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [

    ],

})
export class StoryModule { }