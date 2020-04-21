import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import './directory.styles.scss';

class Directory extends React.Component{
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: '1',
                    emoji: '🧢',
                    linkUrl: 'hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: '2',
                    emoji: '🥼',
                    linkUrl: 'jackets'
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: '3',
                    emoji: '👟',
                    linkUrl: 'sneakers'
                },
                {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    id: '4',
                    emoji: '👩',
                    size: 'large',
                    linkUrl: 'womens'
                },
                {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    id: '5',
                    emoji: '🧑',
                    size: 'large',
                    linkUrl: 'mens'
                }
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem
                            key={id}
                            {...otherSectionProps}
                        />
                    ))
                }
            </div>
        )
    }
}

export default Directory;