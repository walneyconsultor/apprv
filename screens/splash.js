import React, { Component } from 'react';
import Logo from  '../assets/img/logo2.png';

import {
    Container,
    Content,
    Button,
    Thumbnail,
    Text
} from 'native-base'

import styles from './styles';

const RoundedButton = props =>
    <Button
        onPress ={ props.pressed }
        style={ styles.btn }
        success>
        <Text>{ props.title }</Text>
    </Button>

class Splash extends Component {
    render() {
        return (
            <Container styles={ styles.container }>
                <Thumbnail squared style={ styles.img } source={ Logo } />
                <Content>
                    <RoundedButton 
                        pressed={ () => this.props.navigation.navigate('Account') } 
                        title="Já possui uma conta" />
                    <RoundedButton title="Crie sua conta agora" />
                </Content>
            </Container>
        )
    }
    
}


export default Splash;
