import Toast, {
  BaseToast,
  ErrorToast,
  InfoToast,
} from "react-native-toast-message";

export const successLoginToast = () =>
  Toast.show({
    type: "success",
    text1: "Ви увійшли",
    text2: "Керуйте своєю колекцією фото",
  });

export const successDeleteAvatarToast = () =>
  Toast.show({
    type: "success",
    text1: "Привітання!",
    text2: "Ваш аватар видалено",
  });

export const successAddPostToast = () =>
  Toast.show({
    type: "info",
    text1: "Ваш новий пост додано",
    text2: "Поставте лайк і залиште коментар :)",
  });

export const errorRegistrationToast = () =>
  Toast.show({
    type: "error",
    text1: "Реєстрація неможлива!",
    text2: "Цей імейл вже зареєстрований",
  });

export const errorLoginToast = () =>
  Toast.show({
    type: "error",
    text1: "Електронна пошта або пароль не співпадають",
    text2: "Перевірте їх і спробуйте ще раз",
  });

export const errorFormToast = () =>
  Toast.show({
    type: "error",
    text1: "Помилка. Який сором!",
    text2: "Аватар і всі поля не повинні бути порожніми",
  });

export const errorCommentsToast = () =>
  Toast.show({
    type: "error",
    text1: "Коментар не повинен бути порожнім",
    text2: "Не менше 10 і <200 символів",
  });

export const errorAcceptCameraToast = () =>
  Toast.show({
    type: "error",
    text1: "Ви не дали дозволу",
    text2: "У доступі до місцезнаходження відмовлено",
  });

export const toastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: "green" }}
      text1Style={{
        color: "green",
        fontSize: 18,
      }}
      text2Style={{
        fontSize: 16,
        color: "gray",
      }}
    />
  ),
  error: (props) => (
    <ErrorToast
      {...props}
      style={{ borderLeftColor: "red" }}
      text1Style={{
        color: "red",
        fontSize: 18,
      }}
      text2Style={{
        fontSize: 16,
        color: "gray",
      }}
    />
  ),
  info: (props) => (
    <InfoToast
      {...props}
      style={{ borderLeftColor: "blue" }}
      text1Style={{
        color: "darkblue",
        fontSize: 18,
      }}
      text2Style={{
        fontSize: 16,
        color: "gray",
      }}
    />
  ),
};
