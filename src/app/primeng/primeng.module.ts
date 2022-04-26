import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { DividerModule } from 'primeng/divider';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ButtonModule,
    DropdownModule,
    MultiSelectModule,
    CardModule,
    TableModule,
    DialogModule,
    CheckboxModule,
    InputTextModule,
    VirtualScrollerModule,
    DividerModule
  ],
  exports: [
    ButtonModule,
    DropdownModule,
    MultiSelectModule,
    CardModule,
    TableModule,
    DialogModule,
    CheckboxModule,
    InputTextModule,
    VirtualScrollerModule,
    DividerModule
  ],
  providers: [],
})
export class PrimengModule {}
