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
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: '2',
                    emoji: '🥼'
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: '3',
                    emoji: '👟'
                },
                {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    id: '4',
                    emoji: '👩',
                    size: 'large'
                },
                {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    id: '5',
                    emoji: '🧑',
                    size: 'large'
                }
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({title, imageUrl, id, emoji, size}) => (
                        <MenuItem
                            key={id}
                            title={title}
                            emoji={emoji}
                            imageUrl={imageUrl}
                            size={size}
                        />
                    ))
                }
            </div>
        )
    }
}

export default Directory;