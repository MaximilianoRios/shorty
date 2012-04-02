/*
    This file is part of Shorty.

    Shorty is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Shorty is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Shorty.  If not, see <http://www.gnu.org/licenses/>.
*/

function displayPopover(event) {
    $(this).popover('show');
}
function hidePopover(event) {
    $(this).popover('hide');
}

$(document).ready(function() {
    // logging out should happen in a POST request
    // let's transform the link click into a POST then...
    $('.logout_link').click(function() {
        // XXX: url is hardcoded, would it be better to put this code in a template?
        $.post('/users/logout', function() {
            window.location.href = '/';
        });
    });

    $('input.with-popover').hover(displayPopover, hidePopover);
});
