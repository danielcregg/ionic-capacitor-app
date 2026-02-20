# Ionic Capacitor App

![Ionic](https://img.shields.io/badge/Ionic-3880FF?style=flat-square&logo=ionic&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-DD0031?style=flat-square&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Capacitor](https://img.shields.io/badge/Capacitor-119EFF?style=flat-square&logo=capacitor&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)

A cross-platform mobile application built with Ionic, Angular, and Capacitor featuring a photo gallery with native camera, filesystem, and device storage integration.

## Overview

This project demonstrates how to build a cross-platform mobile app using Ionic and Capacitor with Angular. It includes a tabbed interface with a photo gallery that leverages native device capabilities such as the camera, filesystem, and local storage through Capacitor plugins. The app runs on Android, iOS, and the web from a single codebase, and includes a DevContainer configuration for quick development setup.

## Features

- **Photo Gallery** -- Capture photos using the device camera and display them in a responsive grid
- **Persistent Storage** -- Photos are saved to the device filesystem and cached with Capacitor Preferences
- **Photo Management** -- Delete photos via an action sheet with swipe-to-delete support
- **Cross-Platform** -- Single codebase targeting web, Android, and iOS via Capacitor
- **Tabbed Navigation** -- Three-tab layout with dedicated photo gallery tab
- **DevContainer Support** -- Pre-configured development container for instant setup

## Prerequisites

- **Node.js** 18 or higher
- **npm** 9 or higher
- **Ionic CLI** (`npm install -g @ionic/cli`)
- **Android Studio** (for Android development)
- **Xcode** (for iOS development, macOS only)

## Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/danielcregg/ionic-capacitor-app.git
   cd ionic-capacitor-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Usage

Run in the browser:
```bash
ionic serve
```

Build and run on Android:
```bash
ionic build
ionic cap sync android
ionic cap open android
```

Build and run on iOS (macOS only):
```bash
ionic build
ionic cap sync ios
ionic cap open ios
```

## Tech Stack

- **Framework:** Ionic 7 with Angular 17
- **Native Runtime:** Capacitor 5
- **Language:** TypeScript
- **Capacitor Plugins:** Camera, Filesystem, Preferences, Geolocation, Network, Haptics
- **Platform:** Android, iOS, Web

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
