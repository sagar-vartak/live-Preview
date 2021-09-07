import { IConfig, IEntryQuery, IEntryValue } from "./utils/types";
export default class LivePreview {
    /**
     * @hideconstructor
     */
    config: IConfig;
    tooltip: HTMLButtonElement | null;
    currentElementBesideTooltip: HTMLElement | null;
    tooltipChild: {
        singular: HTMLDivElement | null;
        multiple: HTMLDivElement | null;
    };
    tooltipCurrentChild: "multiple" | "singular";
    _entry: IEntryValue;
    entry: IEntryQuery;
    constructor(initData?: Partial<IConfig>);
    _addEditStyleOnHover: (e: MouseEvent) => void;
    scrollHandler: (e: MouseEvent) => void;
    linkClickHandler: (e: MouseEvent) => void;
    _handleUserChange: (entryEditParams: IEntryValue) => void;
    setOnChangeCallback: (onChangeCallback: () => void) => void;
    _updateBody: (receivedBody: string) => void;
    _resolveIncomingMessage: (e: MessageEvent) => void;
    _createCslpTooltip: () => void;
    _requestDataSync: () => void;
    _updateTooltipPosition: () => boolean;
    _removeDataCslp(): void;
}
//# sourceMappingURL=LivePreview.d.ts.map