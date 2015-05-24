var React = require('react/addons'),
    assert = require('assert'),
    TestUtils = React.addons.TestUtils,
    CheckboxWithLabel = require('../testComponent');

describe('CheckboxWithLabel', function() {
  it('changes the text after click', function() {
    // Render a checkbox with label in the document
    var checkbox = TestUtils.renderIntoDocument(
      <CheckboxWithLabel labelOn="On" labelOff="Off" />
    );

    // Verify that it's Off by default
    var label = TestUtils.findRenderedDOMComponentWithTag(
      checkbox, 'label');
    console.log('[I am a console.log message]text content', label.getDOMNode().textContent, typeof(label.getDOMNode().textContent));
    assert.equal(label.getDOMNode().textContent, 'Off');

    // Simulate a click and verify that it is now On
    var input = TestUtils.findRenderedDOMComponentWithTag(
      checkbox, 'input');
    TestUtils.Simulate.change(input);
    assert.equal(label.getDOMNode().textContent, 'On');
  });
});
