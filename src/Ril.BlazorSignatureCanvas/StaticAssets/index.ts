import SignaturePad from "signature_pad";

export default class BlazorSignatureCanvas {
    static CreateSignaturePad  = (elem:HTMLCanvasElement, options) => 
        new SignaturePad(elem, options);

    // static SetOptionsAsync = (s: SignaturePad, options) => {
    //     s.minWidth = options.minWith;
    //     s.maxWidth = options.maxWidth;
    //     s.throttle = options.throttle;
    //     s.minDistance = options.minDistance;
    //     s.backgroundColor = options.backgroundColor;
    //     s.penColor = options.penColor;
    //     s.velocityFilterWeight = options.velocityFilterWeight;
    // }
    static SetDotSize = (s : SignaturePad, x : number) => s.dotSize = x;
    static SetMinWidth = (s : SignaturePad, x : number) => s.minWidth = x;
    static SetMaxWidth = (s: SignaturePad, x : number) => s.maxWidth = x;
    static SetThrottle = (s: SignaturePad, x: number) => {
        console.log("setting throttle to ", x);
        s.throttle = x;
    }
        
    static SetMinDistance = (s: SignaturePad, x: number) => s.minDistance = x;
    static SetBackgroundColor = (s: SignaturePad, x: string) => s.backgroundColor = x;
    static SetPenColor = (s: SignaturePad, x: string) => s.penColor = x;
    static SetVelocityFilterWeight = (s: SignaturePad, x: number) => s.velocityFilterWeight = x;
} 
