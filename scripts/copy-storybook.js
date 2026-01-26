import { cpSync } from 'fs';
import { join } from 'path';

const sourceDir = join(process.cwd(), 'storybook-static');
const destDir = join(process.cwd(), 'dist', 'storybook');

try {
	cpSync(sourceDir, destDir, { recursive: true });
	console.log('✓ Copied storybook-static to dist/storybook');
} catch (error) {
	console.error('Error copying Storybook:', error);
	process.exit(1);
}
