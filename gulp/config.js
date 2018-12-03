module.exports = {
  root: './build',

	autoprefixerConfig: ['last 3 version', '> 1%', 'ie 8', 'ie 9', 'Opera 12.1'],
	
	smartgridConfig: {
		filename: "_smart-grid",
		outputStyle: "sass",
		columns: 12,
		offset: "30px",
		container: {
			maxWidth: "1100px",
			fields: "30px"
		},
		breakPoints: {
			md: {
				width: "992px",
				fields: "15px"
			},
			sm: {
				width: "720px"
			},
			xs: {
				width: "576px",
				fields: "5px"
			},
			xxs: {
				width: "400px"
			}
		}
	}
};