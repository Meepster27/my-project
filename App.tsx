import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={styles.content}>
        <Image
          source={require('./assets/images/react-logo.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Welcome to My Project</Text>
        <Text style={styles.subtitle}>Built with React Native & Expo</Text>
        
        <View style={styles.section}>
          <Text style={styles.heading}>About This App</Text>
          <Text style={styles.text}>
            This is a simple Expo app that works in Snack. It demonstrates basic React Native components.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Features</Text>
          <Text style={styles.text}>✓ Cross-platform compatibility</Text>
          <Text style={styles.text}>✓ Runs on web, iOS, and Android</Text>
          <Text style={styles.text}>✓ Hot reloading support</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
  },
  section: {
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  text: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
    marginBottom: 8,
  },
});
