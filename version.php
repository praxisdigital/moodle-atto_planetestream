<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Atto planetestream  version file.
 *
 * @package    atto_planetestream
 * @copyright  Planet Enterprises Ltd
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();
$plugin->version   = 2023021400;
$plugin->requires  = 2014041100; // Moodle 2.7.
$plugin->component = 'atto_planetestream';
$plugin->release   = '6.53';
$plugin->maturity  = MATURITY_STABLE;
$plugin->dependencies = array(
    'assignsubmission_estream' => ANY_VERSION,
    'filter_planetestream' => 2015072300
);
