import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { UserProfileComponent } from './user-profile.component';

// This exports the Stories group for this component
export default {
  // The title defines the name and where in the structure of
  // Storybook's menu this is going to be placed.
  // Here we add it to a "Components" section under "Link"
  title: 'Components/UserProfile',
  // The component related to the Stories
  component: UserProfileComponent,
  decorators: [
    // The necessary modules for the component to work on Storybook
    moduleMetadata({
      declarations: [UserProfileComponent],
      imports: [CommonModule,FormsModule, ReactiveFormsModule],
    }),
  ],
};
// This creates a Story for the component
const Template: Story<UserProfileComponent> = () => ({
  component: UserProfileComponent,
  template: `<app-user-profile></app-user-profile>`,
});
export const Base = Template.bind({});
// Other stories could be added here as well, all you have to do is export them along!