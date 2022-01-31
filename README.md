# Ril.BlazorSignatureCanvas
A Blazor wrapper component for the [Signature Pad](https://github.com/szimek/signature_pad) JavaScript library, by Szymon Nowak. Thanks go out to [Allan Mobley](https://github.com/allan-mobley-jr) for his earlier work on an earlier project, Blazor.SignaturePad. 

[Live Demo](https://resourceware.github.io/Ril.BlazorSignatureCanvas/)

## Usage

1. [Install the Nuget package](https://www.nuget.org/packages/Ril.BlazorSignatureCanvas)

2. Link the static JavaScript resource. Add the following to your Blazor host page (Index.html, _Host.cshtml, or whatever your case may be): 
    ```
    <src="/_content/Ril.BlazorSignatureCanvas/BlazorSignatureCanvas.js"></  script>
    ```
    Note, there are no CSS resources to add. This is a purely headless endeavour.

3. Use the component. You'll probably want to capture a reference (<code>@ref</code>) to do anything useful. A bare-bones example may look like this:
    ```
    <SignatureCanvas
        class="my-special-styling-class"
        @ref=signatureCanvas
        width="400" height="200"
        />

    <button @onclick=HandleClear>Clear Signature</button>

    <button @onclick=HandleSave>Save Signature</button>

    @code {
        SignatureCanvas signatureCanvas

        async Task HandleClear() {
            await signatureCanvas.Clear();
        }

        async Task HandleSave() {
            string data = await signatureCanvas.ToDataURL();
            // do something with the data...
        }
    }
    ```
    Extra unmatched attributes are passed directly to the underlying <code>canvas</code> element.


