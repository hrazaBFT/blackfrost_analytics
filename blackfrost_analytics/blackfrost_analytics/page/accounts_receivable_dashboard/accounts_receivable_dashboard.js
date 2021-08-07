frappe.pages['accounts-receivable-dashboard'].on_page_load = function(wrapper) {
	new PowerBIPage(wrapper);
}

PowerBIPage = Class.extend({
	init: function(wrapper) {
		this.page = frappe.ui.make_app_page({
			parent: wrapper,
			title: 'Accounts Receivable Dashboard',
			single_column: true
		});
		this.make();
	},
	make: function() {
		frappe.db.get_single_value('Blackfrost Analytics Settings', 'accounts_receivable_dashboard_url')
		.then(url => {
			$(`<iframe style="width: 100%; height: 87vh" src="${url}&navContentPaneEnabled=false" frameborder="0" allowFullScreen="true"></iframe>`)
				.appendTo(this.page.main);
		})

		this.page.wrapper.find(".layout-main-section-wrapper").css("margin-bottom", "5px");
	}
})