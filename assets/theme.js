
import Aura from "@primeuix/themes/aura";
import { definePreset } from '@primeuix/themes';

const MyPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '{fuchsia.50}',
            100: '{fuchsia.100}',
            200: '{fuchsia.200}',
            300: '{fuchsia.300}',
            400: '{fuchsia.400}',
            500: '{fuchsia.500}',
            600: '{fuchsia.600}',
            700: '{fuchsia.700}',
            800: '{fuchsia.800}',
            900: '{fuchsia.900}',
            950: '{fuchsia.950}'
        }
    }
});

export default {
    preset: MyPreset,
    options: {
        darkModeSelector: '.dark'
    }
};
