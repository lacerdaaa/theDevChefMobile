import React from 'react';
import {
    ActivityIndicator,
    Modal,
    Text,
    View,
} from 'react-native';

interface LoaderProps {
  visible: boolean;
  text?: string;
  size?: 'small' | 'large';
  color?: string;
  overlay?: boolean;
  variant?: 'default' | 'minimal' | 'card';
  className?: string;
  textClassName?: string;
}

const Loader: React.FC<LoaderProps> = ({
  visible,
  text = 'Carregando...',
  size = 'large',
  color = '#007AFF',
  overlay = true,
  variant = 'default',
  className,
  textClassName,
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'minimal':
        return {
          container: 'justify-center items-center',
          box: 'bg-transparent p-4 items-center justify-center',
        };
      case 'card':
        return {
          container: 'justify-center items-center',
          box: 'bg-white dark:bg-gray-800 rounded-2xl p-6 items-center justify-center min-w-32 shadow-lg',
        };
      default:
        return {
          container: 'justify-center items-center',
          box: 'bg-black/80 dark:bg-white/90 rounded-xl p-5 items-center justify-center min-w-24',
        };
    }
  };

  const variantStyles = getVariantStyles();

  const LoaderContent = () => (
    <View className={`${variantStyles.container} ${className || ''}`}>
      <View className={variantStyles.box}>
        <ActivityIndicator size={size} color={color} />
        {text && (
          <Text className={`mt-3 text-base text-center font-medium text-white dark:text-gray-800 ${
            variant === 'card' ? 'text-gray-800 dark:text-white' : ''
          } ${textClassName || ''}`}>
            {text}
          </Text>
        )}
      </View>
    </View>
  );

  if (overlay) {
    return (
      <Modal
        transparent
        animationType="fade"
        visible={visible}
        statusBarTranslucent
      >
        <View className="flex-1 justify-center items-center bg-black/50">
          <LoaderContent />
        </View>
      </Modal>
    );
  }

  return visible ? <LoaderContent /> : null;
};

export default Loader;
