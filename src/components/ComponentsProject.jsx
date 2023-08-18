import { React, useState } from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather, FontAwesome } from '@expo/vector-icons';
import BackgroundImage from '../images/PhotoBG.png';
import user from '../images/User.png';

export const Avatar = ({ photo }) => {
  return (
    <View style={styles.avatarWrap}>
      <View style={styles.avatarImageWrapper}>
        <Image source={photo} style={styles.avatarImage} />
      </View>
      <Feather
        name="plus-circle"
        size={25}
        style={[styles.avatarIcon, photo !== null && styles.avatarIconDelete]}
      />
    </View>
  );
};

export const Background = ({ children }) => {
  return (
    <>
      <ImageBackground source={BackgroundImage} resizeMode="cover" style={styles.backgroundImage}>
        {children}
      </ImageBackground>
    </>
  );
};

export const FormButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.formButton} onPress={onPress}>
      <Text style={styles.formButtonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export const FormInput = ({ placeholder, name, onChange, value }) => {
  const [focus, setFocus] = useState(null);

  return (
    <TextInput
      style={[styles.formInput, focus === name && styles.formActiveInput]}
      name={name}
      placeholder={placeholder}
      onFocus={() => setFocus(name)}
      onBlur={() => setFocus(null)}
      onChangeText={onChange}
      value={value}
    />
  );
};

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const onLogin = () => {
    if (!email || !password) {
      Alert.alert('Please, complete all fields');
      return;
    }
    navigation.navigate('Main');
    console.log({ email, password });
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <View>
      <FormInput
        name="email"
        placeholder="Адреса електронної пошти"
        onChange={setEmail}
        value={email}
      />
      <PassInput onChange={setPassword} value={password} />
      <FormButton text="Увійти" onPress={onLogin} />
    </View>
  );
};

export const Menu = () => {
  return (
    <View style={styles.menuWrap}>
      <Feather name="grid" size={24} style={styles.menuIcon} />
      <TouchableOpacity style={styles.menuUnionButton}>
        <Feather name="plus" size={13} style={styles.menuPlusIcon} />
      </TouchableOpacity>
      <Feather name="user" size={24} style={styles.icon} />
    </View>
  );
};

export const PassInput = ({ onChange, value }) => {
  const [visiblePass, setVisiblePass] = useState(true);
  const [focus, setFocus] = useState(null);

  const showPassword = () => {
    setVisiblePass(!visiblePass);
  };

  return (
    <View>
      <TextInput
        style={[styles.passInput, focus === 'password' && styles.passActiveInput]}
        name="password"
        placeholder="Пароль"
        secureTextEntry={visiblePass}
        onFocus={() => setFocus('password')}
        onBlur={() => setFocus(null)}
        onChangeText={onChange}
        value={value}
      />
      <TouchableOpacity onPress={showPassword} style={styles.passShow}>
        <Text style={styles.passShowText}>{visiblePass ? 'Показати' : 'Приховати'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export const Posts = ({ item }) => {
  const navigation = useNavigation();
  const { photo, title, comments, likes, place, location } = item;
  return (
    <View style={styles.postsContainer}>
      <Image source={photo} style={styles.postsImage}></Image>
      <Text style={styles.postsText}>{title}</Text>
      <View style={styles.postsDescription}>
        <View style={styles.postsRating}>
          <TouchableOpacity
            style={styles.postsIconWrapper}
            onPress={() => navigation.navigate('Comments')}
          >
            <FontAwesome
              name={comments ? 'comments' : 'comment-o'}
              size={24}
              style={[styles.postsIcon, !comments && { backgroundColor: '#fff', color: '#BDBDBD' }]}
            />
            <Text style={styles.postsText}>{comments}</Text>
          </TouchableOpacity>
          <View style={styles.postsIconWrapper}>
            <Feather
              name="thumbs-up"
              size={24}
              style={[styles.postsIcon, !likes && { color: '#BDBDBD' }]}
            />
            <Text style={styles.postsText}>{likes}</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={styles.postsLocateWrapper}
            onPress={() => navigation.navigate('Map', { location })}
          >
            <Feather name="map-pin" size={18} color="#BDBDBD" />
            <Text style={[styles.postsText, styles.postsLocation]}>{place}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const onLogin = () => {
    if (!email || !login || !password) {
      Alert.alert('Please, complete all fields');
      return;
    }
    navigation.navigate('Main');
    reset();
  };

  const reset = () => {
    setEmail('');
    setLogin('');
    setPassword('');
  };

  return (
    <>
      <FormInput name="login" placeholder="Логін" onChange={setLogin} value={login} />
      <FormInput
        name="email"
        placeholder="Адреса електронної пошти"
        onChange={setEmail}
        value={email}
      />
      <View>
        <PassInput onChange={setPassword} value={password} />
      </View>
      <FormButton text="Зареєструватися" onPress={onLogin} />
    </>
  );
};

export const Title = ({ title }) => {
  return <Text style={styles.titleText}>{title}</Text>;
};

export const UserInfo = () => {
  return (
    <View style={styles.userInfoWrapper}>
      <Image source={user} style={styles.userInfoImage} />
      <View>
        <Text style={styles.userInfo}>Natali Romanova</Text>
        <Text style={styles.userInfoEmail}>email@example.com</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarWrap: {
    position: 'absolute',
    top: -60,
    alignSelf: 'center',
  },

  avatarImageWrapper: {
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
    overflow: 'hidden',
  },

  avatarImage: {
    width: 120,
    height: 120,
    objectFit: 'cover',
    backgroundColor: '#F6F6F6',
  },

  avatarIcon: {
    width: 25,
    height: 25,
    position: 'absolute',
    right: -12.5,
    bottom: 14,
    color: '#FF6C00',
    borderWidth: 0,
  },

  avatarIconDelete: {
    transform: [{ rotate: '-45deg' }],
    color: '#E8E8E8',
    backgroundColor: '#ffffff',
    borderRadius: 50,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
  },
  formButton: {
    marginTop: 43,
    marginBottom: 16,
    paddingVertical: 16,
    backgroundColor: '#FF6C00',
    width: '100%',
    borderRadius: 100,
  },

  formButtonText: {
    textAlign: 'center',
    color: '#fff',
  },
  formInput: {
    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
    borderWidth: 1,
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    position: 'relative',
  },

  formActiveInput: {
    borderColor: '#FF6C00',
    backgroundColor: '#fff',
  },
  menuWrap: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 39,
    textAlign: 'center',
    paddingVertical: 9,
    borderTopColor: '#e8e8e8',
    borderTopWidth: 1,
  },

  menuUnionButton: {
    backgroundColor: '#FF6C00',
    width: 70,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },

  menuIcon: {
    color: '#21212180',
  },

  menuPlusIcon: {
    color: '#fff',
  },
  passInput: {
    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
    borderWidth: 1,
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    position: 'relative',
  },

  passActiveInput: {
    borderColor: '#FF6C00',
    backgroundColor: '#fff',
  },

  passShow: {
    position: 'absolute',
    right: 16,
    top: '100%',
    transform: [{ translateY: -50 }],
  },
  passShowText: {
    color: '#1B4371',
  },
  postsContainer: {
    backgroundColor: '#FFFFFF',
    paddingBottom: 32,
    paddingHorizontal: 16,
    gap: 8,
  },
  postsDescription: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 16,
  },
  postsImage: {
    width: '100%',
    borderRadius: 8,
    height: 240,
  },
  postsRating: {
    flexDirection: 'row',
    gap: 24,
  },
  postsIconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  postsIcon: {
    color: '#FF6C00',
  },
  postsLocateWrapper: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
  postsText: {
    fontSize: 16,
  },
  postsLocation: {
    textDecorationLine: 'underline',
  },
  titleText: {
    color: '#212121',
    fontSize: 30,
    letterSpacing: 0.3,
    textAlign: 'center',
    paddingBottom: 32,
  },
  userInfoWrapper: {
    paddingHorizontal: 16,
    paddingTop: 32,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 32,
  },

  userInfoImage: {
    width: 60,
    height: 60,
  },

  userInfo: {
    fontSize: 13,
    fontWeight: '700',
  },

  userInfoEmail: {
    fontSize: 11,
  },
});
