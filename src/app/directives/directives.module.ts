import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LkdBtnDirective } from './lkd-btn.directive';
import {
  PrimaryColorDirective,
  SecondaryColorDirective,
  InfoColorDirective,
  SuccessColorDirective,
  AlertColorDirective,
  DangerColorDirective,
  ExtraColorDirective,
  DarkColorDirective,
  GrayColorDirective,
  WhiteColorDirective
} from './lkd-colors.directive';
import {
  BasicTypeDirective,
  FlatTypeDirective,
  SolidTypeDirective,
  FilledTypeDirective,
  LkdTypeDirective,
  VygTypeDirective
} from './lkd-types.directive';
import {
  LkdOnDirective,
  LkdOffDirective
} from './lkd-onoff.directive';
import {
  LkdTxtPrimaryDirective,
  LkdTxtSecondaryDirective,
  LkdTxtInfoDirective,
  LkdTxtSuccessDirective,
  LkdTxtAlertDirective,
  LkdTxtDangerDirective,
  LkdTxtExtraDirective,
  LkdTxtDarkDirective,
  LkdTxtGrayDirective,
  LkdTxtWhiteDirective,
} from './lkd-typo.directive';
import {
  LkdPillDirective,
  LkdPillAttrDirective
} from './lkd-pill.directive';
import { LkdBtnVygDirective, LkdBtnVygAttrDirective } from './lkd-btn-vyg.directive';

@NgModule({
  declarations: [
    // --- COMPONENTS DIRECTIVES ---------------------
    LkdBtnDirective,
    LkdPillDirective,
    // --- COLORS DIRECTIVES -------------------------
    PrimaryColorDirective,
    SecondaryColorDirective,
    InfoColorDirective,
    SuccessColorDirective,
    AlertColorDirective,
    DangerColorDirective,
    ExtraColorDirective,
    DarkColorDirective,
    GrayColorDirective,
    WhiteColorDirective,
    // --- TYPES DIRECTIVES --------------------------
    BasicTypeDirective,
    FlatTypeDirective,
    SolidTypeDirective,
    FilledTypeDirective,
    LkdTypeDirective,
    VygTypeDirective,
    // --- BEHAVIOR DIRECTIVES -----------------------
    LkdOnDirective,
    LkdOffDirective,
    // --- TYPO DIRECTIVES ---------------------------
    LkdTxtPrimaryDirective,
    LkdTxtSecondaryDirective,
    LkdTxtInfoDirective,
    LkdTxtSuccessDirective,
    LkdTxtAlertDirective,
    LkdTxtDangerDirective,
    LkdTxtExtraDirective,
    LkdTxtDarkDirective,
    LkdTxtGrayDirective,
    LkdTxtWhiteDirective,
    // --- FORMATT DIRECTIVES -------------------------
    LkdPillAttrDirective,
    LkdBtnVygDirective,
    LkdBtnVygAttrDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    // --- COMPONENTS DIRECTIVES ---------------------
    LkdBtnDirective,
    LkdPillDirective,
    // --- COLORS DIRECTIVES -------------------------
    PrimaryColorDirective,
    InfoColorDirective,
    SecondaryColorDirective,
    SuccessColorDirective,
    AlertColorDirective,
    DangerColorDirective,
    ExtraColorDirective,
    DarkColorDirective,
    GrayColorDirective,
    WhiteColorDirective,
    // --- TYPES DIRECTIVES --------------------------
    BasicTypeDirective,
    FlatTypeDirective,
    SolidTypeDirective,
    FilledTypeDirective,
    LkdTypeDirective,
    VygTypeDirective,
    // --- BEHAVIOR DIRECTIVES -----------------------
    LkdOnDirective,
    LkdOffDirective,
    // --- TYPO DIRECTIVES ---------------------------
    LkdTxtPrimaryDirective,
    LkdTxtSecondaryDirective,
    LkdTxtInfoDirective,
    LkdTxtSuccessDirective,
    LkdTxtAlertDirective,
    LkdTxtDangerDirective,
    LkdTxtExtraDirective,
    LkdTxtDarkDirective,
    LkdTxtGrayDirective,
    LkdTxtWhiteDirective,
    // --- FORMATT DIRECTIVES -------------------------
    LkdPillAttrDirective,
    LkdBtnVygDirective,
    LkdBtnVygAttrDirective
  ]
})
export class DirectivesModule { }
