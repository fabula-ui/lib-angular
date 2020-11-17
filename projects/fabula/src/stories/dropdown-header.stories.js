import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata } from '@storybook/angular';

// Fabula API
import {
    AvatarModule,
    BadgeComponent,
    ButtonModule,
    DropdownModule,
    HelpersModule,
    IconsModule,
    ListComponent,
    ListItemComponent,
    TagComponent,
    TextComponent,
    ThemeModule,
    ThemeService,
    UtilsModule
} from '../public-api';

// Props
import { DropdownHeaderColorWrapper } from './wrappers/dropdown-header/color/dropdown-header-color.wrapper';
import { DropdownHeaderExampleWrapper } from './wrappers/dropdown-header/example/dropdown-header-example.wrapper';

// Utils
import { DropdownHeaderUtilMarginWrapper } from './wrappers/dropdown-header/util-margin/dropdown-header-util-margin.wrapper';
import { DropdownHeaderUtilPaddingWrapper } from './wrappers/dropdown-header/util-padding/dropdown-header-util-padding.wrapper';
import { DropdownHeaderUtilVisibilityWrapper } from './wrappers/dropdown-header/util-visibility/dropdown-header-util-visibility.wrapper';

// Module init
export default {
    decorators: [
        moduleMetadata({
            declarations: [
                BadgeComponent,
                ListComponent,
                ListItemComponent,
                TagComponent,
                TextComponent
            ],
            imports: [
                AvatarModule,
                BrowserModule,
                ButtonModule,
                DropdownModule,
                HelpersModule,
                IconsModule,
                ThemeModule.forRoot(),
                UtilsModule
            ],
            providers: [
                ThemeService
            ]
        })
    ],
    title: 'Dropdown Header'
}

// Stories
export const Example = () => ({ component: DropdownHeaderExampleWrapper });
export const PropColor = () => ({ component: DropdownHeaderColorWrapper });
export const UtilMargin = () => ({ component: DropdownHeaderUtilMarginWrapper });
export const UtilPadding = () => ({ component: DropdownHeaderUtilPaddingWrapper });
export const UtilVisibility = () => ({ component: DropdownHeaderUtilVisibilityWrapper });