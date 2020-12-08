import { ElementRef, OnInit } from '@angular/core';
import { CommonComponent } from '../common-component/common-component.component';
import { Icon } from '../../models/icon.model';
import { Message } from '../../models/message.model';
import { FabulaService } from '../../services/fabula.service';
export declare class InputComponent extends CommonComponent implements OnInit {
    elRef: ElementRef;
    fabulaService: FabulaService;
    focused: boolean;
    color: string;
    disabled: boolean;
    expand: boolean;
    glow: boolean;
    has: string;
    icon: Icon;
    iconEnd: Icon;
    iconStart: Icon;
    message: Message;
    passwordToggle: boolean;
    placeholder: string;
    rounded: boolean;
    size: string;
    status: string;
    textarea: boolean;
    type: string;
    variant: string;
    hasFocus: boolean;
    host: any;
    constructor(elRef: ElementRef, fabulaService: FabulaService);
    ngOnInit(): void;
    handleFocus(hasFocus: boolean): void;
    isObject(subject: any): boolean;
    toggleType(): void;
    readonly toggleIcon: string;
}
