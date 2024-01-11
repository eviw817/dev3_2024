<?php

use craft\elements\Entry;
use craft\helpers\UrlHelper;
use craft\helpers\MoneyHelper;

return [
    'endpoints' => [
        'api/flowers' => function() {
            return [
                'elementType' => Entry::class,
                'criteria' => ['section' => 'flowers'],
                'cache' => false,
                'transformer' => function(Entry $entry) {
                    $pictures = [];
                    foreach ($entry->picture->all() as $pic) {
                        $pictures[] = $pic->url;
                    }

                    $colors = [];
                    foreach ($entry -> referenceColor -> all() as $color) {
                        $colors[] = [
                            'name' => $color-> title,
                            'hex' => $color-> color-> getHex()
                        ];
                    }
                    return [
                        'title' => $entry->title,
                        'pictures' => $pictures,
                        'colors' => $colors,
                        'leaves' => $entry -> leaves,
                        'price' => MoneyHelper::toString($entry -> price),
                        'info' => $entry -> information,
                        'bloomingSeason' => $entry -> bloomingSeason,
                        'slug' => $entry -> slug,
                        'id' => $entry -> id
                    ];
                },
            ];
        },
        'api/vases' => function() {
            return [
                'elementType' => Entry::class,
                'criteria' => ['section' => 'vases'],
                'cache' => false,
                'transformer' => function(Entry $entry) {
                    $pictures = [];
                    foreach ($entry->picture->all() as $pic) {
                        $pictures[] = $pic->url;
                    }

                    $colors = [];
                    foreach ($entry -> referenceColor -> all() as $color) {
                            $colors[] = [
                            'name' => $color-> title,
                            'hex' => $color-> color -> getHex()
                        ];
                    }

                    return [
                        'title' => $entry-> title,
                        'pictures' => $pictures,
                        'colors' => $colors,
                        'info' => $entry -> information,
                        'price' => MoneyHelper::toString($entry -> price),
                        'manufacturer' => $entry -> manufacturer,
                        'slug' => $entry -> slug,
                        'id' => $entry -> id
                    ];
                }
            ];
        },
    ]
];