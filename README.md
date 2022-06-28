 ## React ReactNative Memos
 
 ## 画面遷移
Stack.screenコンポーネントから渡される、propsの中のnavigationオブジェクトのnavigate関数を用いる
パラメーターを渡す場合、navigate関数の第二引数にオブジェクトで渡す


## Headerの設定
Screen上部にはnamePropで渡した値が入っている
nameの値はoptions,Propsで変更可能

## Native Stack Navigator
Home画面からUser画面に遷移する際、User画面がHome画面の上に積み重なる
Home画面が消えてUser画面が現れるのではない。
したがって
User画面に遷移する際はHome画面のスタックの上に、User画面が載せられる
User画面からHome画面に遷移する際はUser画面がAnMountされる
Homeは一番下の層なので初回表示される際はマウントされますがその後はアンマウントされることはありません。



https://reffect.co.jp/react/react-navigation#Native_Stack_Navigator　6/28

~~~js
UserScreens
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

export const UserScreens = ({ route }) => {
    useEffect(() => {
        console.log('User Screen Mount');
        return (
            console.log('User Screen Unmount')
        )
    }, [])
    console.log(route);
    return (
        <View>
            <Text>ユーザー画面</Text>
        </View>
    )
}


HomeScreen.js
import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';

export const HomeScreen = ({ navigation }) => {

    useEffect(() => {
        console.log('Home Mount');
        return () => {
            console.log('Home AnMount');
        }
    }, [])

return (
    <View>
        <Text>Home画面</Text>
        <Button
            title="ユーザー"
            onPress={() => navigation.navigate('User', {userId: 1})}
        />
    </View>
    )
}
~~~
