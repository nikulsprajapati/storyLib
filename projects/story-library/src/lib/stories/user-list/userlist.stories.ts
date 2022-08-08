import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { UserListComponent } from './user-list.component';


export default {
  title: 'Components/userList',
  component: UserListComponent,
  decorators: [
    moduleMetadata({
      declarations: [UserListComponent],
      imports: [CommonModule,FormsModule, ReactiveFormsModule],
    }),
  ],
} as Meta;

const Template: Story<UserListComponent> = (args: UserListComponent) => ({
  props: args,
});

export const Default = Template.bind({});

// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Default.args = {
  inputDataArry: [
    {
        "firstName": "nikul",
        "lastName": "kumar",
        "email": "nik@bdo.in",
        "country": "in"
    },
    {
        "firstName": "hiral nikul",
        "lastName": "n",
        "email": "hir@bdo.in",
        "country": "Haiti"
    }
]
};


// Other stories could be added here as well, all you have to do is export them along!