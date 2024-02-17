import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import styles from '../../Styles/auth-styles/authStyle'
type StringType = string | null

const Login = () => {
    const [emial, setEmail] = useState<StringType>(null);
    const [password, setPassword] = useState<StringType>(null);
    
    return (
        <View style={styles.loginCnt}>
            <View style={styles.loginBox}>
                <View style={styles.loginTop}>
                    <Text style={styles.loginHeading}>LOGIN</Text>
                </View>
                <Text style={styles.smallText}>Welcome Back 👋 Together We Face Anything</Text>
                <View style={styles.loginCenter}>
                    <View style={styles.inputCnt}>
                        <Text style={styles.smallText}>Email</Text>
                        <TextInput style={styles.loginInput} onChangeText={(e) => setEmail(e)} />
                    </View>
                    <View style={styles.inputCnt}>
                        <Text style={styles.smallText}>Password</Text>
                        <TextInput style={styles.loginInput} secureTextEntry onChangeText={(e) => setPassword(e)} />
                    </View>
                </View>
                <TouchableOpacity style={styles.loginBottom}>
                    <Text style={styles.landingBtn_Text} >Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login