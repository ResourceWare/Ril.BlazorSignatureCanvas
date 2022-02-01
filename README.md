# Ril.BlazorSignatureCanvas
A Blazor wrapper component for the [Signature Pad](https://github.com/szimek/signature_pad) JavaScript library, by Szymon Nowak. Thanks go out to [Allan Mobley](https://github.com/allan-mobley-jr) for his work on an earlier project, Blazor.SignaturePad. 

[Live Demo](https://resourceware.github.io/Ril.BlazorSignatureCanvas/)

## Usage

1. [Install the Nuget package](https://www.nuget.org/packages/Ril.BlazorSignatureCanvas)

2. Link the static JavaScript resource. Add the following to your Blazor host page (Index.html, _Host.cshtml, or whatever your case may be): 
    ```
    <script src="/_content/Ril.BlazorSignatureCanvas/BlazorSignatureCanvas.js"></ script>
    ```

3. Use the component. You'll probably want to capture a reference (```@ref```) to do anything useful such as saving a signature. A bare-bones example may look like this:
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
    Extra unmatched attributes are passed directly to the underlying ```canvas```canvas element.

## Tips

### Blazor Server Message Size
The returned value from any JSInterop call needs to be asynchronously sent back to the SignatureCanvas component (which, for Blazor Server apps, lives on the server) via a SignalR message. It is quite possible for a DataURL to exceed the maximum 32kb SignalR message size for signatures of sufficient size and/or complexity, resulting in a disconnected circuit and the dreaded "reconnecting to server" message. Happily, this is _not_ an issue for Blazor WebAssembly apps.

If you encounter this issue, and reducing the signature size is not an option, the maximum SignalR message size can be configured in your ```Program.js``` file as follows:

    builder.Services
        .AddServerSideBlazor()
        .AddHubOptions(config =>
        {
            config.MaximumReceiveMessageSize = 1024 * 200; // 200 kb
        });
        