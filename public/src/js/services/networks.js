'use strict';

angular.module('insight.networks')
	.factory('Networks',
		function(Constants, OnixCoreLib) {
			return {
				getCurrentNetwork: function () {
					return OnixCoreLib.Networks.get(Constants.NETWORK);
				}
			}
		});