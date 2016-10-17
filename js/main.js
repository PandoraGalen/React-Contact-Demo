'use strict';

var contactArr = [
    {
        name: 'Pandora_G',
        phone: '15720605555',
        email: 'pandora_g@gmail.com',
        address: '南京工业大学',
        logo: '../images/logo_g.jpeg',
        isActive: true
    },
    {
        name: 'Pandora_S',
        phone: '15720605523',
        email: 'pandora_s@gmail.com',
        address: '南京工业大学',
        logo: '../images/logo_s.jpeg',
        isActive: false
    }, {
        name: 'Pandora_J',
        phone: '15720605532',
        email: 'pandora_j@gmail.com',
        address: '南京工业大学',
        logo: '../images/logo_j.jpeg',
        isActive: false
    }, {
        name: 'Pandora_Z',
        phone: '15720605512',
        email: 'pandora_z@gmail.com',
        address: '南京工业大学',
        logo: '../images/logo_z.jpeg',
        isActive: false
    }, {
        name: 'Pandora_D',
        phone: '15720605511',
        email: 'pandora_d@gmail.com',
        address: '南京工业大学',
        logo: '../images/logo_d.jpeg',
        isActive: false
    }, {
        name: 'Pandora_L',
        phone: '15720605351',
        email: 'pandora_l@gmail.com',
        address: '南京工业大学',
        logo: '../images/logo_l.jpeg',
        isActive: false
    }, {
        name: 'Pandora_G',
        phone: '15720605555',
        email: 'pandora_g@gmail.com',
        address: '南京工业大学',
        logo: '../images/logo_g.jpeg',
        isActive: true
    },
    {
        name: 'Pandora_S',
        phone: '15720605523',
        email: 'pandora_s@gmail.com',
        address: '南京工业大学',
        logo: '../images/logo_s.jpeg',
        isActive: false
    }, {
        name: 'Pandora_J',
        phone: '15720605532',
        email: 'pandora_j@gmail.com',
        address: '南京工业大学',
        logo: '../images/logo_j.jpeg',
        isActive: false
    }, {
        name: 'Pandora_Z',
        phone: '15720605512',
        email: 'pandora_z@gmail.com',
        address: '南京工业大学',
        logo: '../images/logo_z.jpeg',
        isActive: false
    }, {
        name: 'Pandora_D',
        phone: '15720605511',
        email: 'pandora_d@gmail.com',
        address: '南京工业大学',
        logo: '../images/logo_d.jpeg',
        isActive: false
    }, {
        name: 'Pandora_L',
        phone: '15720605351',
        email: 'pandora_l@gmail.com',
        address: '南京工业大学',
        logo: '../images/logo_l.jpeg',
        isActive: false
    }];

var ContactList = React.createClass({
    displayName: 'ContactList',
    getInitialState: function() {
        return {
            person: contactArr[0]
        }
    },
    handleClick: function( contact ) {
        this.setState({
            person: contact
        });
    },
    
    render: function() {
        return React.createElement(
            'div',
            {
                className: 'app'
            },
            React.createElement(
                'div', 
                {
                    className: 'left'
                },
                React.createElement(
                    'h2',
                    'null',
                    'Contact'
                ),
                React.createElement(
                    'div',
                    {
                        className: 'contact_lists'
                    },
                    contactArr.map(function(c) {
                        
                        var contactLogo = {
                          backgroundImage: 'url(' + c.logo + ')'
                        };
                        var contactStyle = {
                             backgroundColor: c === this.state.person ? '#c7cef4' : ''
                        };
                        return React.createElement(
                            'div',
                            {
                                className: 'contact_lists_item',
                                onClick: this.handleClick.bind(this, c),
                                style: contactStyle
                            },
                            React.createElement(
                                'span', 
                                {
                                    className: 'image',
                                    style: contactLogo
                                }
                            ),
                            React.createElement(
                                'span', 
                                {
                                    className: 'name'
                                }, 
                                c.name
                            )
                        );      
                    }, this)
                )
            ),
            React.createElement(
                'div', 
                 {
                    className: 'right'
                 }, 
                 React.createElement(
                    ContactInfo, 
                    {
                        person: this.state.person
                    }
                )
            )
        );  /* */
    }
});

var ContactInfo = React.createClass({
    displayName: 'ContactInfo',
    
    render: function() {
        var styles = {
            backgroundImage: 'url(' + this.props.person.logo + ')'
        };
        
        return React.createElement(
            'div', 
            { className: 'contact_info'}, 
            React.createElement(
                'header', 
                'null',
                React.createElement(
                    'div', {
                        className: 'image',
                        style: styles
                    }
                ),
                React.createElement(
                    'h3',
                    'null',
                    this.props.person.name
                )
            ),
            React.createElement(
                'section', 
                'null',
                React.createElement(
                    'div',
                     {
                        className: 'info-lists'
                     },
                    React.createElement(
                        'h4',
                        'null',
                        'Phone : '
                    ),
                    React.createElement(
                        'h5',
                        'null',
                        this.props.person.phone
                    )
                ),
                 React.createElement(
                    'div',
                     {
                        className: 'info-lists'
                     },
                    React.createElement(
                        'h4',
                        'null',
                        'Email : '
                    ),
                    React.createElement(
                        'h5',
                        'null',
                        this.props.person.email
                    )
                ),
                 React.createElement(
                    'div',
                     {
                        className: 'info-lists'
                     },
                    React.createElement(
                        'h4',
                        'null',
                        'Adress : '
                    ),
                    React.createElement(
                        'h5',
                        'null',
                        this.props.person.address
                    )
                )
            )
        );
    }
});

// 向DOM中插入组件
ReactDOM.render(
//    <ContactInfo />,
    React.createElement(ContactList, null),
    document.body
);