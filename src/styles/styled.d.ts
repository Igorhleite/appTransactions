import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
            primary: string;
            secundary: string;
            over: string;
            text: string;
            logo: string;
        }
    }
}