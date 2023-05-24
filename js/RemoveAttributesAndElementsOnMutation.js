// ==UserScript==
// @name         RemoveAttributesAndElementsOnMutation
// @namespace    http://your-namespace.example.com
// @version      1.0
// @description  Remove specific attributes and elements with a specific set of classes in the Inspector when any change occurs on the page (moc.xes)
// @match        https://*/*
// @match        http://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
		
  	
  
    function removeAttributesAndElements() {
        // Specify the attributes you want to remove
        var attributesToRemove = ['oncontextmenu', 'controlslist'];

        // Specify the set of classes that the element must have to be removed
        var targetClasses = ['h-full z-20 absolute inset-x-0 bottom-0 flex items-center justify-center', 'z-20 absolute inset-x-0 bottom-0 px-16 bottom-panel-container ios-prevent-flickering', 'w-full h-full absolute flex bg-black'];

        var elements = document.querySelectorAll('*');
				
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];

            // Check if the element has the target set of classes
            for (var t = 0; t < targetClasses.length; t++){
                if (element.classList == targetClasses[t]) {
                    // Remove the element
                    element.remove();
                } else {
                    // Check and remove specific attributes
                    for (var j = 0; j < attributesToRemove.length; j++) {
                        var attribute = attributesToRemove[j];

                        if (element.hasAttribute(attribute)) {
                            element.removeAttribute(attribute);
                        }
                    }
                }
            }
        }
    }

    // Create a MutationObserver instance
    var observer = new MutationObserver(function(mutations) {
        // When any change occurs on the page, trigger the removal of attributes and elements
        removeAttributesAndElements();
    });

    // Configure and start the observer
    var observerConfig = { attributes: true, childList: true, subtree: true };
    observer.observe(document, observerConfig);
})();
