import React, { useState } from 'react';
import { Text, Image } from 'react-native';
import { NativeBaseProvider, Box, Heading, VStack, FormControl, HStack, Input, Button, Link, Center, useColorModeValue, useBreakpointValue } from "native-base";
import { useNavigation } from '@react-navigation/native';

const LoginScreen = ({ setIsAuthenticated }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const bgColor = useColorModeValue('light.background.50', 'dark.background.900');
    const textColor = useColorModeValue('light.text.50', 'dark.text.50');
    const linkColor = useColorModeValue("pink.500", "pink.300"); 
    const flexDir = useBreakpointValue({ base: 'column', lg: 'column' });

    const handleLogin = () => {
        if (email && password) { 
            setIsAuthenticated(true);
            navigation.navigate('MainTab'); 
        } else {
            alert('Please enter your credentials'); 
        }
    };

    return (
        <Center w="100%" bg={bgColor} flex={1}>
            <VStack w="90%" maxW="300" space={5} alignItems="center">
                <Image 
                    source={require('../../assets/icon.png')} 
                    style={{ width: '100%', height: 200, marginBottom: 20 }} 
                    resizeMode="contain"
                />
                <Box safeArea p="2" py="8" w="100%" alignItems="center">
                    <Heading size="lg" fontWeight="600" color={textColor}>
                        Welcome
                    </Heading>
                    <Heading mt="1" color={textColor} fontWeight="medium" size="xs">
                        Sign in to continue!
                    </Heading>
                </Box>

                <VStack space={4} mt="5" w="100%">
                    <FormControl>
                        <FormControl.Label>Email</FormControl.Label>
                        <Input value={email} onChangeText={setEmail} />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Password</FormControl.Label>
                        <Input type="password" value={password} onChangeText={setPassword} />
                        <Link _text={{
                            fontSize: "xs",
                            fontWeight: "500",
                            color: linkColor 
                        }} alignSelf="flex-end" mt="1">
                            Forget Password?
                        </Link>
                    </FormControl>
                    <Button mt="2" colorScheme="pink" onPress={handleLogin}>
                        Login
                    </Button>
                    <HStack mt="6" justifyContent="center">
                        <Text fontSize="sm" color={textColor}>
                            I'm a new user.{" "}
                        </Text>
                        <Button
                            variant="link"
                            colorScheme="pink"
                            onPress={() => navigation.navigate('Register')}>
                            Register
                        </Button>
                    </HStack>
                </VStack>
            </VStack>
        </Center>
    );
};

export default LoginScreen;
