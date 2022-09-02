// PENCECI
declare function uuid(): string;
declare function getRandomInt(min: number, max: number): number;
declare function RegisterUICallback(pEvent: string, pCallback: (pData: any, cb: (res: any) => void) => void): void;
declare function SendUIMessage(pData: Record<string, any>): void;
declare function SetUIFocus(pKeyboard: boolean, pMouse: boolean): void;
declare function GetUIFocus(): boolean;

// Context Menu
// NP-UI: exports['np-ui'].showContextMenu(entries)

interface ContextMenuEntry {
    key?: any;
    title: string;
    description?: string;
    action?: string;
    disabled: boolean;
    children?: ContextMenuEntry[];
}

// Textbox input
// NP-UI: exports['np-ui'].OpenInputMenu(entries, validation)

type InputMenuValidation = (values: Record<string, any>) => boolean;

interface InputMenuEntry {
    label: string;
    icon: string;
    name: string;
}

// Debug Lib
// Standalone: "@np-lib/shared/sh_debug.js"

declare function Debug(...args: any[]): void;

// Language lib
// Standalone: "@np-locales/client/lib.js"

declare function _L(pLocaleId: string, pDefault: string, ...pArgs: any[]): string;
declare function GetCurrentLanguage(): string;
declare function SetCurrentLanguage(pLanguage: string): void;
declare function IsLocalesReady(): boolean;