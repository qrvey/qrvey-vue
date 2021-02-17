export const importScript = (url) => {
    document.body.appendChild(Object.assign(document.createElement('script'), {
        type: 'text/javascript',
        defer: true,
        src: url
    }));
}
