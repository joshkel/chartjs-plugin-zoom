import {Chart, Color, Scriptable} from 'chart.js';

export type ZoomMode = 'xy' | 'x' | 'y';

export type ZoomContext = {chart: Chart};

declare module "chart.js" {
	interface ZoomRange {
		x?: number | string | null;
		y?: number | string | null;
	}

	interface ZoomPluginOptions {
		pan: {
			enabled: boolean;
			mode: Scriptable<ZoomMode, ZoomContext>;
			rangeMin: ZoomRange;
			rangeMax: ZoomRange;
			speed: number;
			threshold: number;
			onPan: (context: ZoomContext) => void;
			onPanComplete: (context: ZoomContext) => void;
		};
		zoom: {
			enabled: boolean;
			drag: boolean;
			drag: {
				borderColor: Color;
				borderWidth: number;
				backgroundColor: Color;
				animationDuration: number;
			};
			mode: Scriptable<ZoomMode, ZoomContext>;
			rangeMin: ZoomRange;
			rangeMax: ZoomRange;
			speed: number;
			threshold: number;
			sensitivity: number;
			onZoom: (context: ZoomContext) => void;
			onZoomComplete: (context: ZoomContext) => void;
		};
	}

	interface Chart {
		resetZoom();
	}

	interface PluginOptions {
		zoom: ZoomPluginOptions;
	}
}
