import {
    Component,
    ElementRef,
    Input,
    OnInit,
    Output,
    EventEmitter,
    AfterViewInit,
    ContentChildren,
    QueryList,
    ViewChildren,
    AfterContentInit,
    forwardRef
} from '@angular/core';
import { css } from 'emotion';

// Components
import { DropdownItemComponent } from '../dropdown-item/dropdown-item.component';
import { ListComponent } from '../list/list.component';

// Styles
import DropdownMenuStyles from '@fabula/core/styles/components/dropdown-menu/dropdown-menu';

@Component({
    selector: 'fab-dropdown-menu',
    templateUrl: './dropdown-menu.component.html',
})
export class DropdownMenuComponent extends ListComponent implements AfterViewInit, OnInit {
    @ContentChildren(DropdownItemComponent) dropdownItems: QueryList<DropdownItemComponent>;
    @ViewChildren(DropdownItemComponent) dropdownItemsList: QueryList<DropdownItemComponent>;

    @Input() clickToClose = false;
    @Input() direction: string;
    @Input() items: Array<any>;
    @Input() list = false;
    @Input() size: string;
    @Input() toggle: any;

    @Output() clickItem: EventEmitter<any> = new EventEmitter();
    @Output() closed: EventEmitter<any> = new EventEmitter();

    host;
    listProps;
    open = false;

    constructor(public elRef: ElementRef) {
        super(elRef);
    }

    ngAfterViewInit() {
        this.dropdownItems.forEach((item: DropdownItemComponent) => { this.handleDropdownItem(item); });
        this.dropdownItemsList.forEach((item: DropdownItemComponent) => { this.handleDropdownItem(item); });
    }

    ngOnInit() {
        let dropdownMenuStyles;

        // Get host element
        this.host = this.elRef.nativeElement;

        // Set and apply styles
        dropdownMenuStyles = css(DropdownMenuStyles({ framework: 'angular', props: this }));
        this.host.classList.add(dropdownMenuStyles);

        // Set list props
        this.listProps = {
            padding: true,
            ...this,
        };
    }

    // Methods
    handleDropdownItem(item) {
        item.clicked.subscribe(() => {
            if (this.clickToClose || item.clickToClose) {
                this.closed.emit();
            }

            this.clickItem.emit();
        });

        if (this.color && !item.color) { item.color = this.color; }
        if (this.list) { item.listItem = true; }
        if (this.size) { item.size = this.size; }

        item.init();
    }

    // Listeners
    listen(events) {
        events.toggle.subscribe(open => {
            this.open = open;
        });
    }
}
