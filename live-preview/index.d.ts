import { IConfig } from "./utils/types";
import LivePreview from "./LivePreview";
export declare class ContentstackLivePreview {
    static livePreview: LivePreview | null;
    static userConfig: Partial<IConfig> | null;
    static subscribers: any;
    static init: (userConfig: Partial<IConfig>) => Promise<LivePreview> | undefined;
    static publish: () => void;
    static subscribe: (callback: any) => void;
    static onEntryChange: (onChangeCallback: () => void) => void;
}
export default ContentstackLivePreview;
//# sourceMappingURL=index.d.ts.map