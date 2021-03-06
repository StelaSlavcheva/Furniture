import{html, render} from '../node_modules/lit-html/lit-html.js'

const notificationTemplate = (message) => html `
<section id="notification" @click=${clear}> 
    ${message}
    <span style="margin-left:32px;">\u2716</span>
</section>`;

const container= document.createElement('div');
document.body.appendChild(container)

//visualize notification
export function notify (message){
    render(notificationTemplate(message), container);
    setTimeout(clear, 3000)
}
//hide notification
export function clear(){
    render('', container);
}