/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/Book` | `/(tabs)/Details` | `/(tabs)/Main` | `/(tabs)/PriceNews` | `/(tabs)/Profile` | `/(tabs)/Signup` | `/(tabs)/SplashScrren` | `/(tabs)/Storage` | `/(tabs)/login` | `/Book` | `/Details` | `/Main` | `/PriceNews` | `/Profile` | `/Signup` | `/SplashScrren` | `/Storage` | `/_sitemap` | `/login`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
