import React from 'react';

export interface ISpyProps {
    Fire: any;
    Switch: number;
    children?: any;
}

interface ISpyState {
    hasBeenSeen: boolean;
}

export default class Spy extends React.Component<ISpyProps, ISpyState>{
    ref = React.createRef();

    constructor(props: any) {
        super(props);

        this.state = {
            hasBeenSeen: false,
        }
    }

    async componentDidMount() {
        const observer = new IntersectionObserver(
            ([entry]) => {
                //Set visual ratio and return props function
                if (entry.intersectionRatio !== 0) {
                    //alternative if to call functions
                }
                if (entry.isIntersecting) {
                    //Calling Fire()
                    this.props.Fire();

                    if (this.state.hasBeenSeen === false) {
                        this.setState({ hasBeenSeen: true });
                    }
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: this.props.Switch,
            }
        )

        if (this.ref.current) {
            //@ts-ignore
            observer.observe(this.ref.current);
        }
    }

    render() {
        return (
            //@ts-ignore
            <div ref={this.ref}>
                {this.props.children}
            </div>
        )
    }
}