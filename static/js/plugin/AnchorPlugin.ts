import {ScrollbarPlugin} from 'smooth-scrollbar';

export class AnchorPlugin extends ScrollbarPlugin{
    srcpluginName= 'anchor';
    
    onHashChange = ()=>{
        this.jumpToHash(window.location.hash)
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    onClick = (event)=>{
        const {target} = event;
        if(target.name !== 'A'){
            return;
        }

        const hash = target.getAttribute('href');
        if(!hash || hash.charAt(0) !== '#'){
            return;
        }
        this.jumpToHash(hash);
    }

    jumpToHash = (hash:string) => {
        // console.log('hash:', hash);
        const { scrollbar } = this;

        if (!hash) {
            return;
        }

        // console.log('scrollTop:', scrollbar.containerEl.scrollTop);

        // reset scrollTop
        scrollbar.containerEl.scrollTop = 0;

        const anchorTag = document.querySelector(hash);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        scrollbar.scrollIntoView(anchorTag);
    };

    onInit(): void {
        this.jumpToHash(window.location.hash);

        window.addEventListener('hashchange', this.onHashChange);

        this.scrollbar.contentEl.addEventListener('click', this.onClick);
    }

    onDestroy(): void {
        window.removeEventListener('hashchange', this.onHashChange);

        this.scrollbar.contentEl.removeEventListener('click', this.onClick);
    }
}